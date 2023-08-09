import React from "react";
import { Text,View} from "react-native";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
const App =()=>{
    return(
        <Provider store={store}>
            <Navigation/>
        </Provider>
    )
}

export default App;
