import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, Keyboard, FlatList, View, Image } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Button, Input } from '@ant-design/react-native'
import { useDispatch, useSelector } from 'react-redux'

import {
  clearSearchQuery,
  clearSearchResults,
  fetchSearchResults,
  setSearchQuery,
} from '@redux/actions/searchLocationActions'

import withLogger from '@components/WithLogger'
import { P } from '@components/Typography'

let timeoutId

const Autocomplete = ({
  placeholder = 'Search...',
  onPressHistoryLog = () => {},
  onSelectResult = () => {},
  logSearchHistory = () => {},
}) => {
  const dispatch = useDispatch()
  const { query, results, isEmptyResult } = useSelector(state => state.search)

  //
  // ─── HOOKS ────────────────────────────────────────────────────────────────────
  //

  const [focusMode, setFocusMode] = useState(false)

  useEffect(() => {
    if (!!query && focusMode) {
      logSearchHistory(query, results)
    }
  }, [results])

  useEffect(() => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      if (focusMode) {
        _fetchSearchResults(query)
      }
    }, 1000)
  }, [query])

  //
  // ─── METHODS ────────────────────────────────────────────────────────────────────
  //

  const _fetchSearchResults = value => {
    if (!value) {
      dispatch(clearSearchResults())
    } else {
      dispatch(fetchSearchResults(value))
    }
  }

  const _handleSearch = text => {
    dispatch(setSearchQuery(text))
  }

  const _handleSelect = item => {
    _unfocusInput() // unfocus the searchbox

    onSelectResult(item)

    dispatch(setSearchQuery(item.label)) // set the selected result label to searchbox
    dispatch(clearSearchResults()) // clear results list after user selected
  }

  const _clearSearch = () => {
    dispatch(clearSearchQuery())
    dispatch(clearSearchResults())
  }

  const _focusInput = () => {
    if (!focusMode) {
      setFocusMode(true)
    }
  }

  const _unfocusInput = () => {
    if (focusMode) {
      _clearSearch()
      setFocusMode(false)
      Keyboard.dismiss()
    }
  }

  //
  // ─── RENDER ─────────────────────────────────────────────────────────────────────
  //

  return (
    <View style={styles({ focusMode }).container}>
      <View style={{ flexDirection: 'row' }}>
        <Input
          prefix={
            <MaterialCommunityIcons
              name={focusMode ? 'keyboard-backspace' : 'map-marker'}
              size={20}
              style={{ marginRight: 10 }}
              color="black"
              onPress={_unfocusInput}
            />
          }
          suffix={
            focusMode && !!query ? (
              <MaterialCommunityIcons
                name="close-circle-outline"
                size={24}
                color="black"
                onPress={_clearSearch}
              />
            ) : undefined
          }
          style={styles({ focusMode }).input}
          placeholder={placeholder}
          value={query}
          onChangeText={_handleSearch}
          onFocus={_focusInput}
        />
        <Button style={styles({ focusMode }).button} onPress={onPressHistoryLog}>
          <MaterialCommunityIcons name="history" size={20} color="black" />
        </Button>
      </View>

      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <FlatList
          style={styles({ focusMode }).dropdown}
          showsVerticalScrollIndicator={false}
          data={results}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles({ focusMode }).dropdownItem}
              onPress={() => _handleSelect(item)}
            >
              <MaterialCommunityIcons name="map-marker" size={20} color="black" />
              <P style={styles({ focusMode }).dropdownText}>{item.label}</P>
            </TouchableOpacity>
          )}
          ListEmptyComponent={() =>
            isEmptyResult ? (
              <View style={styles({ focusMode }).emptyList}>
                <Image
                  style={styles({ focusMode }).emptyListIcon}
                  source={require('@assets/icons/result-not-found.png')}
                />
                <P>Oppps, no results found.</P>
              </View>
            ) : (
              <View />
            )
          }
        />
      </View>
    </View>
  )
}

export default withLogger(Autocomplete)

const styles = props =>
  StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      paddingHorizontal: 20,
      paddingTop: 40,
      backgroundColor: props.focusMode ? '#fff' : undefined,
      top: 0,
      bottom: props.focusMode ? 0 : undefined,
      left: 0,
      right: 0,
    },

    input: {
      flex: 1,
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
    },

    button: {
      width: 50,
      height: 50,
      padding: 0,
      marginLeft: 10,
    },

    dropdown: {
      backgroundColor: '#fff',
      paddingBottom: 'auto',
    },

    dropdownItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },

    dropdownText: {
      marginLeft: 10,
    },

    emptyList: {
      paddingTop: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },

    emptyListIcon: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginBottom: 20,
    },
  })
