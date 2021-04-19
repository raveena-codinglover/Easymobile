import * as React from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";
import themesStyle from '../styles/theme.style';


/**
 * used to display loader in application
 */
export class BusyIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.visible ? (
      <View style={styles.style2} >
          <ActivityIndicator size="large" color={themesStyle.MAIN_COLOR} />
      </View>
    ) : null;
  }

}

/**
 * page component styles
 * @type {StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>}
 */

const styles = StyleSheet.create({
    initStyle: {
        flex: 1,
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 0.7,
      },
    style2: {
        flex: 1,
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: "center",
        width: "100%",
        opacity: 0.7
    }
});
