import '../index.css'

export default function Checked(props) {
    return (
        <button className={props.On ? 'marked-button' : 'done-button'}
                id={props.id}
                type='button'
                onClick={props.onClick}>{props.On ? 'Done' : 'Mark as Done'}</button>
    )
}