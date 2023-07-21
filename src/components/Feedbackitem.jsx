import Card from "./shared/Card"
function Feedbackitem({item}) {
    
    return (
        <div>
            <Card reverse={true}>
                <div className="num-display">{item.rating}</div>
                <div className="text-display">{item.text}

                </div>
            </Card>
        </div>
    )
}

export default Feedbackitem
