import React from "react";


const Gender = ({ onCheckboxChange, selection }) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selection === "male" ? "selected" : ""}`}>
                    <span className='label-text'>Male</span>
                    <input type='checkbox' className='checkbox border-slate-900'
                        checked={selection === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer${selection === "female" ? "selected" : ""}`}>
                    <span className='label-text'>Female</span>
                    <input type='checkbox' className='checkbox border-slate-900'
                        checked={selection === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer${selection === "other" ? "selected" : ""}`}>
                    <span className='label-text'>Other</span>
                    <input type='checkbox' className='checkbox border-slate-900'
                        checked={selection === "other"}
                        onChange={() => onCheckboxChange("other")}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer${selection === "PNTS" ? "selected" : ""}`}>
                    <div className="tooltip tooltip-bottom tooltip-info" data-tip="ⓘ Prefer not to say">
                        <span className='label-text'>PNTS</span>
                    </div>
                    <input type='checkbox' className='checkbox border-slate-900'
                        checked={selection === "PNTS"}
                        onChange={() => onCheckboxChange("PNTS")}
                    />
                </label>
            </div>



        </div>
    );
};
export default Gender;