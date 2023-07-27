import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const fetchImagesFromPixels = async () => {
  let data = await axios.get (
    'https://api.pexels.com/v1/search?query=nature&orientation=portraits&size=small&per_page=20',
    {
      headers: {
        Authorization: '',
      },
    }
  );
  const {photos} = data.data;
  return photos;
};

export default function Index () {
  const [images, setImages] = useState (null);
  const [activeIndex, setActiveIndex] = useState (0);
  useEffect (() => {
    const fetchImages = async () => {
      const images = await fetchImagesFromPixels ();

      setImages (images);
    };

    fetchImages ();
  }, []);

  const topRef = useRef ();
  const thumbRef = useRef ();

  const screenWidth = Dimensions.get ('window').width;
  const screenHeight = Dimensions.get ('window').height;
  const IMAGE_SIZE = 80;
  const SPACING = 10;

  const scrollToActiveIndex = index => {
    setActiveIndex (index);
    //scroll to flatlists
    topRef?.current?.scrollToOffset({
      offset: index * screenWidth,
      animated: true
    })
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > screenWidth/2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - screenWidth/2 + IMAGE_SIZE/2,
        animated: true
      })
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true
      })
    }
  };

  if (!images) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <FlatList
        ref={topRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString ()}
        onMomentumScrollEnd={ev => {
          scrollToActiveIndex (
            Math.floor (
              ev.nativeEvent.contentOffset.x / screenWidth
            )
          );
        }}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: screenWidth,
                height: screenHeight,
              }}
            >
              <Image
                source={{uri: item.src.portrait}}
                style={[StyleSheet.absoluteFillObject]}
              />
            </View>
          );
        }}
      />
      <FlatList
        ref={thumbRef}
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString ()}
        style={{position: 'absolute', bottom: IMAGE_SIZE}}
        contentContainerStyle={{paddingHorizontal: SPACING}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex (index)}>
              <Image
                source={{uri: item.src.portrait}}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderRadius: 12,
                  marginRight: SPACING,
                  borderWidth: 2,
                  borderColor: activeIndex === index ? '#fff' : 'transparent',
                }}
              />
            </TouchableOpacity>
          );
        }}
      />

    </View>
  );
}
