const COLOR = {
    ORANGE: '#fd6542',
    GREEN: '#56b586'
}

const styles = {
    container:{
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    mainBox:{
        width: '50%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    title:{
        fontSize: 40,
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 50,
    },
    greetBox:{
        marginBottom: 10
    },
    greet:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    money: {
        color: COLOR.ORANGE
    },
    containerBoxItem:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    boxItem:{
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 20,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        boxShadow: `-4px 0px ${COLOR.GREEN}`,
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        fontWeight: 'bold'
    },
    transactionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    boxTextBank:{
        display: 'flex',
        marginBottom: 10,
        marginRight: 10
    },
    containerInput:{
        display: 'grid',
        gridTemplateColumns: '1fr 25%',
        marginBottom: 20,
        height: 35
    },
    textBox:{
        marginBottom:10
    },
    inputText:{
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: 4,
        fontSize: 16,
        padding: '12px 20px 12px 20px'
    },
    itemBetweenText:{
        marginRight : 10,
        marginLeft: 10
    },
    detailTransaction:{
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    itemDetailTransaction:{
        display: 'grid', 
        gridRowGap: 5,
        marginBottom: 20
    },
    iconInboxTransaction:{
        marginRight: 20
    },
    buttonBackDetail:{
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: 'white',
        width: 100,
        padding: 10,
        borderColor: COLOR.ORANGE,
        color: COLOR.ORANGE
    },
    defaultButton:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    }
}



export {styles, COLOR}