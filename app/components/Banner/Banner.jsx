import Styles from "./Banner.module.css"

export const Banner = () => {
    return (
      <section className={Styles['banner']}>
       <div className={Styles['banner_description']}>
         <h1 className={Styles['banner_title']}>
         Портал инди-игр от&nbsp;студентов Яндекс Практикума
         </h1>
         <div className={Styles['banner_text-block']}>
           <p className={Styles['banner_text']}>
           Студенты курсов разрабатывают свои игры на Unity, здесь мы их
           публикуем. Вы можете играть прямо на сайте. А если у вас есть
           аккаунт пользователя — получаете возможность голосовать за игры.
           </p>
         </div>
         <a href="#popular" className={`button ${Styles['banner__link']}`}>Смотреть игры</a>
       </div>
       <img
       src="/images/banner-illustration.jpg"
       alt="Рука, утопленная в желтом фоне"
       className={Styles['banner__image']}
       />
     </section>
    )
}