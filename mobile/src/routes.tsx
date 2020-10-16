import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetail from './pages/OrphanageDetails';
import Header from './components/Header';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {

    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f3f3f5' } }}>
                <Screen
                    name="OrphanagesMap"
                    component={OrphanagesMap}
                />

                <Screen
                    name="OrphanageDetail"
                    component={OrphanageDetail}
                    options={{ headerShown: true, header: () => <Header showCancel={false} title="Orfanato" /> }}
                />

                <Screen
                    name="SelectMapPosition"
                    component={SelectMapPosition}
                    options={{ headerShown: true, header: () => <Header title="Selecione o local no mapa" /> }}
                />

                <Screen
                    name="OrphanageData"
                    component={OrphanageData}
                    options={{ headerShown: true, header: () => <Header title="Infroma os dados" /> }}
                />
            </Navigator>
        </NavigationContainer>
    );
}