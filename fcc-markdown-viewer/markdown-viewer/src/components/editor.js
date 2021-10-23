export default function Editor(props) {
    return (
        <textarea 
            id="editor"
            rows="15" 
            columns="90" 
            value={props.value} 
            onChange={(e) => props.setValue(e.target.value)} 
        />
    );
}