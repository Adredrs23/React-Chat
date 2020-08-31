function storyCountColorModifier(number){
    switch ( number % 3 ) {
        case 0:
            return "primary"
        case 1:
            return "secondary"
        case 2:
            return "error"
        default:
            return "error"
    }  
}

export default storyCountColorModifier;