import React, { useState } from 'react'
import Smenu, { ISmenuTypes } from './Components/Smenu'

export interface ISettingModal {
    title: string
    args: Array<ISmenuTypes>
}

const SettingModal: React.FC<ISettingModal> = ({
    title,
    args,
}): JSX.Element => {
    const [content, setContent] = useState(args[0].content)

    const handleClick = (updatedContent: any) => {
        setContent(updatedContent)
    }

    return (
        <div className='u-settings-layout'>
            <div className='u-settings-sideBar'>
                <h3> {title}</h3>
                <ul className=''>
                    {args.map((item, index) => {
                        return (
                            <Smenu
                                item={item}
                                key={index}
                                handleClick={handleClick}
                            />
                        )
                    })}
                </ul>
            </div>
            <div className='u-settings-content'>{content}</div>
        </div>
    )
}

export default SettingModal
