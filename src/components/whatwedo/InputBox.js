import React, { useState } from 'react';

const InputBox = () => {
    const [isEdit, setIsEdit] = useState(true);
    const [isShow, setIsShow] = useState('hidden');
    const [isOutline, setIsOutline] = useState('');
    const submit = (e) => {
        e.preventDefault();
        setIsEdit(true);
        setIsShow('hidden');
        setIsOutline('')
    }
    const editButton = () => {
        setIsEdit(false);
        setIsShow('flex');
        setIsOutline('outline-double')
    }
    const bottomBorder = () => {
        return(
            {
                borderBottom:'2px dashed gray'
            }
        )
    }
    return (
        <div className='flex justify-center'>
            <div className='w-2/4 shadow-2xl'>
                <div className=' bg-pink-700'>
                    <div className='px-2 flex justify-between py-2'>
                        <p className='text-white text-2xl font-semibold'>Hello test</p>
                        <button onClick={editButton} className='px-3 py-1 shadow-md rounded-sm text-white bg-red-400'>Edit</button>
                    </div>
                </div>
                <div className='p-4 '>
                    <form>
                        <div style={bottomBorder()} className='flex pb-2'>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start pl-10">
                                <input
                                    className={`${isOutline}`}
                                    type="text"
                                    name="name"
                                    disabled={isEdit}
                                    defaultValue="Partho bepary"
                                />
                            </div>
                        </div>
                        <div style={bottomBorder()} className="mt-4 flex items-center pb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start pl-10">
                                <input
                                    className={`${isOutline}`}
                                    disabled={isEdit}
                                    type="email"
                                    name="email"
                                    defaultValue="panthopath"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-4">
                            <button
                                onClick={submit}
                                type="submit"
                                className={`${isShow} w-1/4 items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false`}
                            >
                                submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputBox;