import Icon from '@/components/icon'

const RS = ({text,href,className="",icon=""}) => {
    return (
        <div className={`rs ${className}`}>
          <a href={href} target="blank">
            <Icon>{icon}</Icon>
            {text}
          </a>
        </div>
    )
}
export default RS