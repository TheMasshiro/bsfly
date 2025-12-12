import { Redirect, Route } from 'react-router-dom';
import {
    getPlatforms,
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { analyticsOutline, menuOutline, notificationsCircleOutline, thermometerOutline } from 'ionicons/icons';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

import '@ionic/react/css/palettes/dark.always.css';
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { CycleProvider } from './context/CycleContext';
import SensorPage from './pages/AppSensors/SensorPage';
import AnalyticsPage from './pages/AppAnalytics/Analytics';
import NotificationsPage from './pages/AppNotifications/Notifications';
import MorePage from './pages/AppMore/More';
import AboutPage from './pages/AppMore/AppAbout/About';
import SettingsPage from './pages/AppMore/AppSettings/Settings';
import LandingPage from './pages/AppLanding/SignIn';

setupIonicReact();

export const platform = getPlatforms();

const App: React.FC = () => (
    <IonApp>
        <CycleProvider>
            <IonReactRouter>
                <SignedIn>
                    <IonTabs>
                        <IonRouterOutlet>
                            <Route exact path="/sensors" component={SensorPage} />
                            <Route exact path="/analytics" component={AnalyticsPage} />
                            <Route exact path="/notifications" component={NotificationsPage} />
                            <Route exact path="/more" component={MorePage} />
                            <Route exact path="/more/view" component={AboutPage} />
                            <Route exact path="/more/backup" component={AboutPage} />
                            <Route exact path="/more/settings" component={SettingsPage} />
                            <Route exact path="/more/about" component={AboutPage} />
                            <Route exact path="/">
                                <Redirect to="/sensors" />
                            </Route>
                        </IonRouterOutlet>
                        <IonTabBar slot="bottom">
                            <IonTabButton tab="sensors" href="/sensors">
                                <IonIcon aria-hidden="true" icon={thermometerOutline} />
                                <IonLabel>Sensors</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="analytics" href="/analytics">
                                <IonIcon aria-hidden="true" icon={analyticsOutline} />
                                <IonLabel>Analytics</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="notifications" href="/notifications">
                                <IonIcon aria-hidden="true" icon={notificationsCircleOutline} />
                                <IonLabel>Notifications</IonLabel>
                            </IonTabButton>
                            <IonTabButton tab="more" href="/more">
                                <IonIcon aria-hidden="true" icon={menuOutline} />
                                <IonLabel>More</IonLabel>
                            </IonTabButton>
                        </IonTabBar>
                    </IonTabs>
                </SignedIn>
            </IonReactRouter>
            <SignedOut>
                <IonReactRouter>
                    <Route exact path="/welcome" component={LandingPage} />
                    <Route exact path="*">
                        <Redirect to="/welcome" />
                    </Route>
                </IonReactRouter>
            </SignedOut>
        </CycleProvider>
    </IonApp>
);

export default App;
