const ProductForm = () => {
    return(
      <>
            <div>
                <form>
                    <div className="form-group">
                        <input className="m-1" type="text" name="title" id="id" placeholder="Title" /> <br />
                        <input className="m-1" type="text" name="subtitle" id="number" placeholder="Subtitle" /> <br />
                    </div>
                </form>
            </div>
            <button >ADD</button>
            <button >Cancel</button>

      </>
    )
  }
  
  export default ProductForm