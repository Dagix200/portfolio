import { React } from 'react';

function Contacts() {
    return(
        <div id='contacts'>
            <div className='ContactsH2'>
                <h2><span className='ContactsUnderline'>Co</span>ntacts</h2>
            </div>
            <div className='ContactsMain'>
                <p>In case you'd like to get in touch with me or check out my projects, here are my most used socials:</p>
                <br/>
                <div className='socialsCon'>
                <a href='https://www.facebook.com/damian.jarmuz.7'><img src='facebook.svg'/></a>
                <a href='https://github.com/Dagix200'><img src='github.svg' className='github'/></a>
                </div>
            </div>
        </div>
    )
}

export default Contacts;