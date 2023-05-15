import './Button.css'

const Button = ({ children, className = '', component: Component = 'a', ...restProps }) => {
    return <Component className={`button ${className}`} {...restProps}>{children}</Component>

}
 
export default Button;