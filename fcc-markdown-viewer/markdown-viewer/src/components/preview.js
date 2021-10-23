const marked = window.marked;


export default function Preview(props) {
    const convertedText = marked(props.value);

    return (
        <div id="preview" className="col-lg-6">
            <div dangerouslySetInnerHTML={{__html: convertedText}} />
        </div>
    )

}
