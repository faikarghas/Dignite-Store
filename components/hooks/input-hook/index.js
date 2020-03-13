import {useState} from 'react'

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: event => {
              setValue(event.target.value);
            }
        }
    }
}


// how to use it

// call this
// const {value: username, bind: bindUsername, reset: resetUsername} = useInput('')

// and add {...bindUsername} into input form

