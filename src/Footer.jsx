function Footer(props) {
    const styles = {
      footer: {
        //position: 'absolute',
        bottom: 0,
        width: '100%',
        marginTop: '1rem',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        color: props.color,
        background: ' black',
        position: 'fixed'
      },
      line: {
        height:'1px',
        width:'90%',
        background: props.color,
      },
      text: {
        padding: '0.5rem',
        color: 'white'
      }
    }  
    
    return (
      <div style={styles.footer}>
        <div style={styles.line}>
          
        </div>
        <div style={styles.text}>{props.title} Copyrights @thiru310 2023
        </div>
      </div>
    )
  }

  export default Footer;