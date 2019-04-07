import React, {Component} from 'react';
import {createMuiTheme, CssBaseline, MuiThemeProvider, Theme} from "@material-ui/core";
import {MuiPickersUtilsProvider} from "material-ui-pickers";
import MomentUtils from '@date-io/moment';
import moment from "moment";
import "moment/locale/fr";
import {blue} from "@material-ui/core/colors";
import {BrowserRouter, Route} from "react-router-dom";
import {AEComponent} from "./components/AEComponent";
import {AppBarComponent} from "./components/AppBarComponent";
import {AppStore} from "./model/stores";
import {Instance} from "mobx-state-tree";
import {PageType} from "./model/enums";

interface AppState {
  appStore: Instance<typeof AppStore>;
  theme: Theme;
}

class App extends Component<{}, AppState> {
  constructor(props: Readonly<any>) {
    super(props);

    moment.locale('fr');

    this.state = {
      appStore: AppStore.create({ currentPage: PageType.AE_SIMULATOR }),
      theme: createMuiTheme({
        palette: {
          primary: blue
        },
        typography: {
          useNextVariants: true
        }
      })
    };
  }

  render() {
    return (
        <BrowserRouter>
          <MuiThemeProvider theme={this.state.theme}>
            <MuiPickersUtilsProvider utils={MomentUtils} moment={moment} locale={"fr"}>
              <CssBaseline />
              <div>
                <AppBarComponent appStore={this.state.appStore} />
                <Route path="/" component={AEComponent} />
              </div>
            </MuiPickersUtilsProvider>
          </MuiThemeProvider>
        </BrowserRouter>
    );
  }
}

export default App;
