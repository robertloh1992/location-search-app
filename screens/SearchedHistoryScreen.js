import React from 'react'
import { StyleSheet, FlatList, View, Image } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'

import { P } from '@components/Typography'

const SearchedHistoryScreen = () => {
  const { searchedHistory } = useSelector(state => state.search)

  //
  // ─── RENDER ─────────────────────────────────────────────────────────────────────
  //

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={searchedHistory}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.listItemInfo}>
              <MaterialCommunityIcons name="map-search-outline" size={20} color="black" />
              <P style={{ marginLeft: 10 }}>Keyword: {item.keyword}</P>
            </View>
            <View style={styles.listItemInfo}>
              <MaterialCommunityIcons name="format-list-bulleted" size={20} color="black" />

              <P style={{ marginLeft: 10 }}>Results: </P>
              <View>
                {item.results.length > 0 ? (
                  item.results.map((result, index) => (
                    <P key={`result-${index}`}>- {result.label}</P>
                  ))
                ) : (
                  <P>No results found</P>
                )}
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Image style={styles.emptyListIcon} source={require('@assets/icons/empty.png')} />
            <P>Oppps, no search records.</P>
          </View>
        )}
      />
    </View>
  )
}

export default SearchedHistoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  list: {
    width: '100%',
  },

  listItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 15,
  },

  listItemInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 10,
  },

  emptyList: {
    flex: 1,
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
