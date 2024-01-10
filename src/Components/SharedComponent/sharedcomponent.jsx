export const SectionHead = ({lang, eng, chn, _eng, _chn, _id}) => {
  return (
    <h2 id={_id ? _id : eng}>{lang ? eng : chn} <span className='font-lora font-extralight'>{lang ? _eng : _chn}</span></h2>
  )
}