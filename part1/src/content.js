import React from 'react'
import { Part } from './part';

const Content = (props) => {
    return (
        <div>
            <Part name={props.part1.name} exercises={props.part1.exercises} />
            <Part name={props.part2.name} exercises={props.part2.exercises} />
            <Part name={props.part3.name} exercises={props.part3.exercises} />
        </div>
    )
}

export { Content }