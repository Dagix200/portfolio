import { React } from 'react';

function Languages() {
    return (
        <div id='languages'>
            <div className='Langh2'>
                <h2><span className='LangUnderline'>La</span>nguages</h2>
            </div>
            <div className='LangMainContent'>
                <div className='langCpp'>
                    <img src='c++.svg'/>
                    <table>
                        <tr>
                            <td className='cppCell'></td>
                            <td className='cppCell2'></td>
                            <td className='cppCell3'></td>
                            <td className='cppCell4'></td>
                            <td className='cppCel5'></td>
                        </tr>
                    </table>
                </div>
                <div className='langPython'>
                    <img src='python.svg'/>
                    <table>
                        <tr>
                            <td className='pyCell'></td>
                            <td className='pyCell2'></td>
                            <td className='pyCell3'></td>
                            <td className='pyCell4'></td>
                            <td className='pyCel5'></td>
                        </tr>
                    </table>
                </div>
                <div className='langKotlin'>
                    <img src='kotlin.svg'/>
                    <table>
                        <tr>
                            <td className='ktCell'></td>
                            <td className='ktCell2'></td>
                            <td className='ktCell3'></td>
                            <td className='ktCell4'></td>
                            <td className='ktCel5'></td>
                        </tr>
                    </table>
                </div>
                <div className='langJavaScript'>
                    <img src='javascript.svg'/>
                    <table>
                        <tr>
                            <td className='jsCell'></td>
                            <td className='jsCell2'></td>
                            <td className='jsCell3'></td>
                            <td className='jsCell4'></td>
                            <td className='jsCel5'></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Languages;