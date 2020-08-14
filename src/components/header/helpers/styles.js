const styles = {
    root: {
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        '& > video': {
            width: '100%',
            '@media (max-width:1024px)': {
                width: '300%',
                height: '100vh',
                marginLeft: '-900px'
            },
            '@media(max-width:600px)': {
                width: '380%',
                height: '100vh',
                marginLeft: '-500px'
            }
        }
    },
    innerBanner: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '20%',
        left: '10%',
        '@media(max-width:1024px)': {
            left: 0,
            top: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }

    },
    contentBanner: {
        '@media(max-width:1024px)': {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            '& > h5': {
                display: 'none'
            }
        }
    },
    buttonsBanner: {
        '@media(max-width:600px)': {
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            '& > button': {
                width: '100%',
                margin: '10px 0',
                padding: '20px',
                fontSize: '20px',
                fontWeight: 'bolder'
            }
        }
    },
    waves: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        '@media(max-width:1024px)': {
            display: 'none'
        }
    }
};

export default styles;