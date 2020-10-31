import React  from 'react';


const ModeDraw = (props) => {
    const { switchMode, modeDraw } = props;
    return ( 
        <div class="mood-draw-box">
        <select onChange={switchMode}>
            <option value="">--Please choose a draw mode--</option>
            {modeDraw.map(mode => (
                <option key={mode.id} value={mode.id}> {mode.text}</option>
            ))}
        </select>
    </div>

      );
}
 
export default ModeDraw ;


