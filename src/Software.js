import { React } from 'react';

function Software() {
    return (
        <div id='software'>
            <div className='SoftH2'>
                <h2><span className='SoftUnderline'>So</span>ftware</h2>
            </div>
            <div className='SoftMainContent'>
                <div className='softVS'>
                    <img src='vscode.svg'/>
                    <table>
                        <tr>
                            <td className='vsCell'></td>
                            <td className='vsCell2'></td>
                            <td className='vsCell3'></td>
                            <td className='vsCell4'></td>
                            <td className='vsCell5'></td>
                        </tr>
                    </table>
                </div>
                <div className='softAndroidStudio'>
                    <img src='android-studio.svg'/>
                    <table>
                        <tr>
                            <td className='asCell'></td>
                            <td className='asCell2'></td>
                            <td className='asCell3'></td>
                            <td className='asCell4'></td>
                            <td className='asCell5'></td>
                        </tr>
                    </table>
                </div>
                <div className='softFirebase'>
                    <img src='firebase.svg'/>
                    <table>
                        <tr>
                            <td className='frCell'></td>
                            <td className='frCell2'></td>
                            <td className='frCell3'></td>
                            <td className='frCell4'></td>
                            <td className='frCell5'></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Software;