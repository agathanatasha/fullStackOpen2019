import React from 'react'
import { Header } from './header'
import { Total } from './total'
import { Content } from './content'

const Course = ({course}) => {
    return(
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course