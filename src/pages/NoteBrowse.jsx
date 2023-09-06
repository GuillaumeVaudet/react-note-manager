import TextCard from '../components/TextCard';

const NoteBrowse = () => {
  return(
    <div>
      <TextCard
        title="Title"
        subtitle="subtitle"
        content="content"
        onClick={ () => alert("click") }
        onClickTrash={ () => alert("Trash click") }/>
    </div>
  )
}

export default NoteBrowse