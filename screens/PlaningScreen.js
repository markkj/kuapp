import React from 'react'
import BaseScreen from './BaseScreen';
import Content from '../components/Planing/Content';
const PlaningScreen = (props) => {
    
    return (
        <BaseScreen {...props} contentComponent={<Content {...props} />} />
    )
}

export default PlaningScreen
