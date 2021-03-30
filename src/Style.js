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
        flexDirection: 'column'
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
        padding: 10,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxTextBank:{
        display: 'flex',
        width: 150,
        
    },
    containerInput:{
        display: 'grid',
        gridTemplateColumns: '1fr 25%',
        marginBottom: 20,
        height: 35
    },
    inputText:{
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: 4,
        fontSize: 16,
        padding: '12px 20px 12px 20px'
    }
}



export {styles, COLOR}