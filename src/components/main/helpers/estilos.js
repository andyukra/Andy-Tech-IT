const styles = {
    iconDesc: {
        margin: '30px 0',
        padding: '10px',
        borderRadius: '10px',
        background: 'tomato',
        boxShadow: '0 1px 2px rgba(0,0,0,0.4)'
    },
    iconDesc2: {
        margin: '30px 0',
        padding: '10px',
        borderRadius: '10px',
        background: 'steelblue',
        boxShadow: '0 1px 2px rgba(0,0,0,0.4)'
    },
    iconDesc3: {
        margin: '30px 0',
        padding: '10px',
        borderRadius: '10px',
        background: 'gold',
        boxShadow: '0 1px 2px rgba(0,0,0,0.4)'
    },
    css: {
        background: 'gold',
        opacity : '0',
        transition:'2s ease-out',
        padding: '30px 15px',
        '@media(min-width:1025px)': {
            clipPath: 'polygon(0% 0%, 100% 17%, 100% 100%, 0% 85%)',
            padding: '80px 15px 50px 15px'
        }
    },
    js: {
        background: 'steelblue',
        opacity : '0',
        transition: '2s ease-out',
        padding: '30px 15px',
        color: 'white',
        '@media(min-width:1025px)': {
            clipPath: 'polygon(0% 10%, 100% 0%, 100% 89%, 0% 100%)',
            padding: '80px 15px 50px 15px'
        }
    },
    html:{
        padding:'15px',
        opacity:'0',
        transition:'2s ease-out'
    }
}

export default styles;