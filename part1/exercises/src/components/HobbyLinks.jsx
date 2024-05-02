export default function HobbyLinks() {
hobbyLinks = [
"https://hobbyhelp.com/best-electric-skateboards-longboards/",
"https://www.wikihow.com/Make-Pottery"
]

return (
    <div>
        <a href={hobbyLinks[0]}>Electric Longboarding</a>
        <a href={hobbyLinks[1]}>Pottery</a>
    </div>
)


}