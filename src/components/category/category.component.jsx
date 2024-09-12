import './category.style.scss';

const Category = ({category}) => {
    const { title, subtitle, imageUrl } = category;
    return <article className='category-container'>
      <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </article>
};

export default Category;