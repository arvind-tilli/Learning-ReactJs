import React from 'react'
import Person from './Person';

function NameList() {

    // const names = ["Arvind", "Ranjan", "Mani"];
    // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ];
    // const personList = persons.map((person, index) => <h2>I am {person.name}, {person.age} years old and I know {person.skill}</h2>)
    // index as key should not be used when 
    // 1. If list is not static
    // 2. If there is unique id present in the list
    // 3. if there is any filter or re-ordering the list
    const personList = persons.map((person, index) => <Person key={index} person={person} />)
    return (
        <div>
            {personList}
        </div >
    )
}

export default NameList
