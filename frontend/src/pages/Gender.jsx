import React from "react";


const Gender = () => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Male</span>
                    <input type='checkbox' className='checkbox border-slate-900' />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Female</span>
                    <input type='checkbox' className='checkbox border-slate-900' />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Other</span>
                    <input type='checkbox' className='checkbox border-slate-900' />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <div className="tooltip tooltip-bottom tooltip-info" data-tip="ⓘ Prefer not to say">
                        <span className='label-text'>PNTS</span>
                    </div>
                    <input type='checkbox' className='checkbox border-slate-900' />
                </label>
            </div>



        </div>
    );
};
export default Gender;