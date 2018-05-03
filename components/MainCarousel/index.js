import React from 'react'

import {View, Text, StyleSheet, Image, TouchableWithoutFeedback, Dimensions} from 'react-native'

import Carousel, {Pagination} from 'react-native-snap-carousel'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

const win = Dimensions.get("window")

class MainCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {slider1ActiveSlide: 0}
  this.clickItem = this.clickItem.bind(this)
  this._renderItem = this._renderItem.bind(this)
  }
    clickItem() {
    }
    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
              <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate("Offer", {offer: item})}>
                <Image
              source={{ uri: `http://92.53.90.154/uploads/offers/${item.id}.jpg`}}
              style={styles.image}
            />
            </TouchableWithoutFeedback>
            </View>
        );
    }

    render () {

        return (
            <View style={styles.imageContainer}>
                <Carousel
                  ref={(c) => { this._carousel = c; }}
                  data={this.props.offer.list}
                  renderItem={this._renderItem}
                  sliderWidth={win.width}
                  itemWidth={win.width/1.4}
                  inactiveSlideScale={0.95}
                  hasParallaxImages={true}
                  firstItem={1}
                  loop={false}
                  loopClonesPerSide={2}
                  inactiveSlideOpacity={0.9}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start'
  },
  imageContainer: {
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 12
  },
  image: {
    height: win.width/1.4/1.5,
    width: win.width/1.4,
    borderRadius: 10
  }
});

function mapStateToProps(state) {
    return {
        offer: state.offer
    }
}

export default connect(mapStateToProps)(withNavigation(MainCarousel))