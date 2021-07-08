import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { PersistGate } from "redux-persist/integration/react";
import { history, persistor, store } from "Redux/ConfigureStore";
import MainRoute from "Route/MainRoute";
import firebase from 'firebase/app';
import { createFirestoreInstance } from 'redux-firestore';

const rrfConfig = {
  userProfile: "users",
  // useFirestoreForProfile: true,
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}
function App() {
  return (
    <>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps} >
          <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
              <MainRoute />
            </ConnectedRouter>
          </PersistGate>
        </ReactReduxFirebaseProvider>
      </Provider>
    </>
  );
}

export default App;
