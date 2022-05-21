import './styles.css'

export default function ProgressBar(props) {
    return (
        <div className="background">
            <div className="foreground"style={{ width: '' + props.percentage + '%' }}>
            </div>
        </div>
    )
}