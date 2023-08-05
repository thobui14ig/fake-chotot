'use client'

const ProductClient = ({ props }: { props: any }) => {
    return(<>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-blue-200 p-4">Div 1</div>
            <div className="bg-green-200 p-4">Div 2</div>
            <div className="bg-red-200 p-4">Div 3</div>
            <div className="bg-yellow-200 p-4">Div 4</div>
            <div className="bg-pink-200 p-4">Div 5</div>
        </div>
    </>)
}

export default ProductClient