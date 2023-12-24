import { useForm } from "react-hook-form";

const AddArtistPopup = (props) => {
  const { register, handleSubmit } = useForm();

  return (props.trigger) ? (
    <div className="addArtistPopup">
      <div className="addArtistPopup-inner">
        <form
          className="artist-input-form"
          onSubmit={handleSubmit(props.addToList)}
        >
          <h1>Add a New Artist</h1>

          <label>Name</label>
          <input {...register('name', { required: true })} />

          <label>Nationality</label>
          <input {...register('nationality', { required: true })} />

          <label>Age</label>
          <input {...register('age', { required: true })} />

          <div className="form-btn">
            <button type="submit" className="popup-add-btn">Add</button>
            <button className="popup-close-btn" onClick={()=>props.setTrigger(false)}>Cancel</button>
          </div>

        </form>
      </div>
    </div>
  ) : '';
}

export default AddArtistPopup;