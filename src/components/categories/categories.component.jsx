import './categories.style.scss';
import Category from '../category/category.component'; 

const Categories = ({ categories }) => (
  <section className='categories-container'>
  {
    categories.map(c => <Category key={c.id} category={c}/>)
  }
  </section>
)

export default Categories;