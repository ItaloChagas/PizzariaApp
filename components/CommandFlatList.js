import {
    View,
    FlatList
} from 'react-native'
import React from 'react'

import Command from './Command'
import { commands } from './util/Pedidos'

export default function CommandFlatList() {
    return (
        <View>

            <FlatList
                data={commands}
                renderItem={({ item }) =>
                    <Command
                        OrderName={item.name}
                        OrderDate={item.date}
                        OrderImage={item.image}
                        OrderPrice={item.price}
                        OrderDescription={item.description}
                    />
                }
            />

        </View>
    )
}