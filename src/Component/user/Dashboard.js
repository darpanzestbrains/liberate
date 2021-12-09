import * as React from "react";
import logo from '../../assets/images/logo2.png';
import recommended1 from '../../assets/images/recommended1.png';
import recommended2 from '../../assets/images/recommended2.png';
import meditation1 from '../../assets/images/meditation1.png';
import meditation2 from '../../assets/images/meditation2.png';
import meditation3 from '../../assets/images/meditation3.png';
import meditation4 from '../../assets/images/meditation4.png';
import meditation5 from '../../assets/images/meditation5.png';
import meditation_lock from '../../assets/images/meditaition_lock.png';
import wa1 from '../../assets/images/wa1.png';
import wa2 from '../../assets/images/wa2.png';
import wa3 from '../../assets/images/wa3.png';
import wa4 from '../../assets/images/w4.png';


const Dashboard = (props) => {
    return (
        <>
            <main className="dashboard">
                <div className="mobile-header">
                    <div className="container">
                        <div className="row menu-row">
                            <a href="/"><img alt="" src={logo} /></a>
                            <div className="menu-icon"><i className="fas fa-bars"></i></div>
                        </div>
                    </div>
                </div>
                <section className="admin-dashboard">
                    <div className="ds-leftbar-main">
                        <div className="leftbar">
                            <a href="/"><img alt="" src={logo} /></a>
                            <nav className="side-menu">
                                <ul>
                                    <li>
                                        <a className="active" href="dashboard.html">
                                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.37525 5.56521C2.70856 5.46271 3.07682 5.58029 3.28696 5.86861C3.52045 6.18896 3.49282 6.62968 3.22115 6.9185L2.477 7.46853C2.12441 7.76084 1.91929 8.19369 1.9166 8.6511V17.0391C1.92666 18.4054 3.03692 19.5092 4.40627 19.5142H8.63229V19.5325C9.08893 19.5325 9.45912 19.9019 9.45912 20.3576C9.45912 20.8132 9.08893 21.1826 8.63229 21.1826H4.40627C2.12007 21.1776 0.267992 19.3295 0.262939 17.0482V8.6511C0.277556 7.68076 0.734009 6.76983 1.50318 6.17596L2.2657 5.6076L2.37525 5.56521ZM7.78709 1.10652C9.18209 -0.0123934 11.1693 -0.0123934 12.5643 1.10652L18.9125 6.15763C19.6648 6.76133 20.1064 7.66956 20.116 8.63276L20.1068 17.0391C20.1068 19.3224 18.2518 21.1735 15.9635 21.1735H14.1261C13.0185 21.1735 12.1192 20.2802 12.1142 19.175V15.3798L12.1056 15.2842C12.0605 15.0362 11.8429 14.8481 11.5813 14.8481H8.82521C8.68229 14.8481 8.54535 14.9054 8.44515 15.0071C8.34495 15.1088 8.2899 15.2464 8.29237 15.389V16.8374C8.29237 17.293 7.92218 17.6624 7.46554 17.6624C7.00889 17.6624 6.63871 17.293 6.63871 16.8374V15.389C6.63871 14.8079 6.87004 14.2506 7.28181 13.8397C7.69359 13.4288 8.25207 13.198 8.8344 13.198H11.5905C12.7996 13.2031 13.777 14.1825 13.777 15.389V19.175C13.777 19.3674 13.9333 19.5234 14.1261 19.5234H16.0094C17.3794 19.5234 18.4899 18.4152 18.4899 17.0482V8.6511C18.4832 8.18591 18.2673 7.74837 17.902 7.45936L11.5538 2.40825C10.7532 1.75063 9.59816 1.75063 8.79765 2.40825L6.75814 3.93C6.38014 4.20087 5.85366 4.11468 5.58221 3.73749C5.31076 3.36031 5.39713 2.83496 5.77513 2.5641L7.78709 1.10652Z" fill="#2F5B60" />
                                            </svg>
                                            Home</a>
                                    </li>
                                    <li>
                                        <a href="goals.html"><svg className="strokeSvg" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.1891 9.14916C13.6454 9.14847 14.0981 9.23123 14.5247 9.39335C14.5708 9.41087 14.62 9.41913 14.6693 9.41765C14.7186 9.41618 14.7672 9.40501 14.8122 9.38478C14.8572 9.36454 14.8977 9.33564 14.9316 9.29973C14.9654 9.26381 14.9918 9.22158 15.0094 9.17545C15.0269 9.12932 15.0351 9.0802 15.0337 9.03088C15.0322 8.98156 15.021 8.93301 15.0008 8.88801C14.9805 8.843 14.9516 8.80243 14.9157 8.76859C14.8798 8.73476 14.8376 8.70833 14.7914 8.69081C13.8262 8.32381 12.7642 8.29929 11.783 8.62135C10.8019 8.94342 9.96101 9.59253 9.40105 10.4602C8.84109 11.3278 8.59598 12.3614 8.70668 13.3881C8.81739 14.4148 9.27722 15.3723 10.0093 16.1007C10.7413 16.829 11.7012 17.284 12.7285 17.3895C13.7558 17.495 14.7881 17.2446 15.653 16.6803C16.5178 16.116 17.1627 15.2719 17.4798 14.2891C17.7969 13.3064 17.767 12.2445 17.3951 11.2812C17.3783 11.2338 17.3523 11.1903 17.3184 11.1531C17.2845 11.116 17.2436 11.086 17.1979 11.065C17.1523 11.044 17.1029 11.0323 17.0526 11.0308C17.0024 11.0292 16.9524 11.0377 16.9055 11.0558C16.8586 11.0739 16.8158 11.1012 16.7797 11.1361C16.7436 11.1711 16.7148 11.2129 16.6951 11.2591C16.6754 11.3054 16.6652 11.3551 16.6651 11.4053C16.665 11.4556 16.6749 11.5054 16.6944 11.5517C16.9836 12.2999 17.0257 13.121 16.8146 13.8948C16.6035 14.6686 16.1502 15.3546 15.5212 15.8523C14.8921 16.35 14.1203 16.6333 13.3186 16.6608C12.5169 16.6882 11.7275 16.4584 11.0659 16.0049C10.4042 15.5514 9.90512 14.8981 9.64155 14.1405C9.37799 13.3829 9.36381 12.5609 9.6011 11.7947C9.83839 11.0285 10.3147 10.3583 10.9603 9.88228C11.6059 9.40626 12.3869 9.14935 13.1891 9.14916Z" fill="white" stroke="white" strokeWidth="0.5" />
                                            <path d="M21.975 0.912362C21.9064 0.883826 21.8309 0.87627 21.758 0.890647C21.6851 0.905024 21.6181 0.94069 21.5655 0.993135L19.3113 3.24728C19.2761 3.28223 19.2482 3.32379 19.2292 3.36957C19.2102 3.41535 19.2004 3.46444 19.2004 3.51402V6.36363L13.0107 12.5531C12.9402 12.6236 12.9006 12.7192 12.9006 12.8189C12.9006 12.9186 12.9402 13.0142 13.0107 13.0847C13.0812 13.1552 13.1768 13.1948 13.2765 13.1948C13.3762 13.1948 13.4719 13.1552 13.5424 13.0847L19.7321 6.89523H22.5818C22.6813 6.89481 22.7765 6.85495 22.8466 6.7844L25.1009 4.53026C25.1531 4.47772 25.1886 4.41092 25.203 4.33826C25.2174 4.26559 25.2099 4.19029 25.1816 4.12184C25.1533 4.05338 25.1054 3.99482 25.0439 3.95352C24.9824 3.91222 24.9101 3.89002 24.836 3.88971H22.7377L23.5999 3.0275C23.6704 2.957 23.71 2.86139 23.71 2.7617C23.71 2.662 23.6704 2.56639 23.5999 2.4959C23.5294 2.4254 23.4338 2.3858 23.3341 2.3858C23.2344 2.3858 23.1388 2.4254 23.0683 2.4959L22.2061 3.35811V1.25987C22.2062 1.1856 22.1844 1.11294 22.1432 1.05109C22.1021 0.989234 22.0436 0.940958 21.975 0.912362ZM19.9519 3.66993L21.4547 2.16717V4.10949L19.9519 5.61225V3.66993ZM23.9287 4.64109L22.4259 6.14385H20.4835L21.9863 4.64109H23.9287Z" fill="white" stroke="white" strokeWidth="0.5" />
                                            <path d="M24.8363 12.5309H22.9578C22.8972 10.8714 22.4135 9.25489 21.5526 7.83479C21.5008 7.7496 21.4173 7.68848 21.3204 7.66488C21.2235 7.64127 21.1213 7.65712 21.0361 7.70893C20.9509 7.76075 20.8897 7.84428 20.8661 7.94116C20.8425 8.03803 20.8584 8.14032 20.9102 8.22551C21.6953 9.52895 22.1368 11.0103 22.1932 12.5309H20.3279C20.2282 12.5309 20.1327 12.5705 20.0622 12.641C19.9917 12.7114 19.9522 12.807 19.9522 12.9066C19.9522 13.0062 19.9917 13.1018 20.0622 13.1723C20.1327 13.2427 20.2282 13.2823 20.3279 13.2823H22.197C22.1003 15.5405 21.1598 17.6802 19.5615 19.2784C17.9632 20.8766 15.8234 21.8171 13.5652 21.9138V20.0447C13.5652 19.9451 13.5256 19.8495 13.4552 19.7791C13.3847 19.7086 13.2891 19.669 13.1895 19.669C13.0899 19.669 12.9943 19.7086 12.9238 19.7791C12.8534 19.8495 12.8138 19.9451 12.8138 20.0447V21.9138C10.5555 21.8171 8.41576 20.8766 6.81748 19.2784C5.21919 17.6802 4.27873 15.5405 4.18201 13.2823H6.05113C6.15078 13.2823 6.24634 13.2427 6.3168 13.1723C6.38725 13.1018 6.42684 13.0062 6.42684 12.9066C6.42684 12.807 6.38725 12.7114 6.3168 12.641C6.24634 12.5705 6.15078 12.5309 6.05113 12.5309H4.18201C4.27873 10.2727 5.21919 8.13304 6.81748 6.53481C8.41576 4.93658 10.5555 3.99615 12.8138 3.89944V5.58065C12.8138 5.68029 12.8534 5.77585 12.9238 5.8463C12.9943 5.91676 13.0899 5.95634 13.1895 5.95634C13.2891 5.95634 13.3847 5.91676 13.4552 5.8463C13.5256 5.77585 13.5652 5.68029 13.5652 5.58065V3.90319C15.0927 3.96269 16.5797 4.41073 17.8858 5.20496C17.9696 5.23951 18.0631 5.24258 18.149 5.2136C18.235 5.18462 18.3075 5.12555 18.3533 5.04727C18.3991 4.969 18.415 4.87681 18.3981 4.78772C18.3812 4.69863 18.3327 4.61865 18.2615 4.56253C16.8432 3.69495 15.2265 3.20478 13.5652 3.13866V1.26021C13.5652 1.16057 13.5256 1.06501 13.4552 0.994559C13.3847 0.924103 13.2891 0.884521 13.1895 0.884521C13.0899 0.884521 12.9943 0.924103 12.9238 0.994559C12.8534 1.06501 12.8138 1.16057 12.8138 1.26021V3.14806C10.3563 3.24535 8.02581 4.26513 6.28676 6.00412C4.54772 7.7431 3.5279 10.0736 3.4306 12.5309H1.5427C1.44305 12.5309 1.34749 12.5705 1.27703 12.641C1.20658 12.7114 1.16699 12.807 1.16699 12.9066C1.16699 13.0062 1.20658 13.1018 1.27703 13.1723C1.34749 13.2427 1.44305 13.2823 1.5427 13.2823H3.4306C3.5279 15.7397 4.54772 18.0701 6.28676 19.8091C8.02581 21.5481 10.3563 22.5679 12.8138 22.6652V24.553C12.8138 24.6526 12.8534 24.7482 12.9238 24.8187C12.9943 24.8891 13.0899 24.9287 13.1895 24.9287C13.2891 24.9287 13.3847 24.8891 13.4552 24.8187C13.5256 24.7482 13.5652 24.6526 13.5652 24.553V22.6652C16.0227 22.5679 18.3532 21.5481 20.0922 19.8091C21.8313 18.0701 22.8511 15.7397 22.9484 13.2823H24.8363C24.9359 13.2823 25.0315 13.2427 25.102 13.1723C25.1724 13.1018 25.212 13.0062 25.212 12.9066C25.212 12.807 25.1724 12.7114 25.102 12.641C25.0315 12.5705 24.9359 12.5309 24.8363 12.5309Z" fill="white" stroke="white" strokeWidth="0.5" />
                                        </svg>
                                            Goals</a>
                                    </li>
                                    <li>
                                        <a href="recipes.html"><svg className="stroke-svg" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.92257 0.406711C1.73716 0.589208 1.62601 0.855672 2.01406 2.45227C2.24631 3.40844 4.05962 8.74161 4.67749 10.2734C5.93507 13.3902 6.73956 13.2873 7.20041 13.3472C7.42562 13.3759 7.64452 13.323 7.83357 13.1936C8.34926 12.842 8.52108 12.7393 8.72032 12.6206C8.78997 12.5789 8.86472 12.5345 8.95815 12.4767C9.51511 13.3899 10.2034 14.8067 10.8712 16.1822C11.7703 18.0332 12.6998 19.9472 13.4424 20.9376C13.9147 21.5671 14.4258 21.752 14.7711 21.7967C15.4327 21.8816 16.1163 21.5273 16.5133 20.8937C16.9167 20.2513 16.93 19.4893 16.5487 18.9054C15.7642 17.7021 4.27561 2.5758 2.5533 0.499901C2.31426 0.210867 2.02935 0.301387 1.92257 0.406711ZM15.8112 20.4527C15.5853 20.8126 15.2186 21.0172 14.8772 20.9735C14.609 20.939 14.3423 20.7546 14.1059 20.4396C13.4111 19.513 12.4991 17.6352 11.6175 15.8199C10.8118 14.1612 10.0509 12.5944 9.42847 11.6742C9.35906 11.5715 9.25155 11.5099 9.13774 11.4951C9.04406 11.4832 8.94553 11.5028 8.86011 11.5584C8.58175 11.7378 7.90249 12.1428 7.36592 12.5092C7.34092 12.5257 7.32685 12.5277 7.30573 12.5248C7.02131 12.6716 7.00335 12.4561 6.52333 11.8045C5.7499 10.7551 3.56722 4.59176 2.93601 2.56731C2.69066 1.78247 2.95178 2.21517 3.14374 2.46198C5.21794 5.13051 15.0912 18.1897 15.8537 19.3582C16.0964 19.7283 15.9908 20.1661 15.8112 20.4527Z" fill="white" stroke="white" strokeWidth="0.3" />
                                            <path d="M21.9932 4.498C21.834 4.3337 21.5715 4.33006 21.4074 4.48926C20.3491 5.51605 19.3616 6.51687 18.5692 7.32136C18.3664 7.52739 18.1805 7.71523 18.0128 7.88486L17.2306 7.10246L20.5345 3.89663C20.6993 3.73719 20.7027 3.47461 20.5432 3.31031C20.384 3.14578 20.1219 3.14189 19.9571 3.30133L16.6448 6.5159L15.9082 5.77911L19.2322 2.55436C19.3963 2.39492 19.4002 2.13258 19.2407 1.96828C19.0815 1.80375 18.819 1.80011 18.6549 1.9593L15.3222 5.1928L14.6053 4.47519L18.2067 0.981055C18.371 0.82137 18.3746 0.558789 18.2154 0.394736C18.056 0.230198 17.7936 0.226558 17.6293 0.385757L13.4848 4.40699C12.4257 5.43475 12.5078 6.94423 13.6617 8.33601L11.3046 10.6573C11.14 10.8167 11.1359 11.0793 11.2956 11.2433C11.3596 11.3093 11.4405 11.3496 11.5247 11.3637C11.6501 11.3846 11.7834 11.3479 11.8819 11.2523L14.241 8.92912C14.705 9.31547 15.2544 9.57126 15.8313 9.66712C15.9058 9.67949 15.9806 9.68944 16.0558 9.69624C16.8088 9.76637 17.4985 9.55573 17.9492 9.11866C18.237 8.84006 18.644 8.42653 19.1597 7.90331C19.9503 7.10173 20.9334 6.10431 21.9852 5.08407C22.1485 4.92487 22.1527 4.66229 21.9932 4.498ZM16.1317 8.87088C15.55 8.81652 14.9909 8.54132 14.558 8.09527C13.7107 7.22137 13.1334 5.97277 14.0114 5.05398L17.4252 8.4707C17.4068 8.48914 17.3886 8.50637 17.3706 8.52409C17.0988 8.78788 16.6355 8.91772 16.1317 8.87088Z" fill="white" stroke="white" strokeWidth="0.3" />
                                            <path d="M9.43121 14.4348C9.25988 14.2826 8.99802 14.2982 8.84586 14.4697C7.17742 16.3464 4.15021 19.6624 3.12877 20.5686C2.62083 21.019 1.82071 20.837 1.39262 20.3851C0.94463 19.9116 1.01234 19.3122 1.57827 18.7405C3.01495 17.2887 5.13113 15.6264 6.72725 14.4224C6.91023 14.2848 6.94663 14.0244 6.80879 13.8417C6.67095 13.6587 6.41104 13.6223 6.22805 13.7599C4.61131 14.9794 2.46285 16.667 0.988556 18.1571C-0.0853109 19.2428 0.210761 20.3426 0.790285 20.9547C1.11815 21.3005 1.58216 21.549 2.0748 21.631C2.62326 21.722 3.20715 21.6063 3.67844 21.1886C4.85884 20.1417 8.2559 16.3804 9.46519 15.0199C9.61783 14.8488 9.6023 14.5867 9.43121 14.4348Z" fill="white" stroke="white" strokeWidth="0.3" />
                                        </svg>Recipes</a>
                                    </li>
                                    <li>
                                        <a href="entries.html"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.8642 0.378662C15.9287 0.378662 17.7641 2.28588 17.7724 5.47033V14.8338C17.7724 18.0183 15.9454 19.9255 12.8725 19.9255H10.1485C9.79919 19.8855 9.53477 19.5787 9.53477 19.2135C9.53477 18.8483 9.79919 18.5416 10.1485 18.5016H12.8642C15.2062 18.5016 16.3855 17.2675 16.3855 14.8338V5.47033C16.3855 3.03669 15.2062 1.8026 12.8642 1.8026H5.50609C3.16411 1.8026 1.97651 3.03669 1.97651 5.47033V14.8338C1.97651 17.2675 3.16411 18.5016 5.50609 18.5016C5.85543 18.5416 6.11985 18.8483 6.11985 19.2135C6.11985 19.5787 5.85543 19.8855 5.50609 19.9255C2.44158 19.9255 0.606201 18.0183 0.606201 14.8338V5.47033C0.606201 2.27725 2.44158 0.378662 5.50609 0.378662H12.8642ZM12.6151 13.5825C12.9912 13.5825 13.2961 13.8993 13.2961 14.2901C13.2961 14.681 12.9912 14.9978 12.6151 14.9978H5.73863C5.36252 14.9978 5.05763 14.681 5.05763 14.2901C5.05763 13.8993 5.36252 13.5825 5.73863 13.5825H12.6151ZM12.6151 9.44011C12.8779 9.41 13.1341 9.53873 13.2746 9.77147C13.4151 10.0042 13.4151 10.2999 13.2746 10.5327C13.1341 10.7654 12.8779 10.8942 12.6151 10.864H5.73863C5.38929 10.824 5.12487 10.5173 5.12487 10.1521C5.12487 9.78687 5.38929 9.48014 5.73863 9.44011H12.6151ZM8.36298 5.30636C8.71232 5.34639 8.97674 5.65312 8.97674 6.01833C8.97674 6.38355 8.71232 6.69028 8.36298 6.7303H5.74694C5.3976 6.69028 5.13318 6.38355 5.13318 6.01833C5.13318 5.65312 5.3976 5.34639 5.74694 5.30636H8.36298Z" fill="#F5F5F5" />
                                        </svg>
                                            Entries</a>
                                        <span className="entries-count">2</span>
                                    </li>
                                    <li>
                                        <a href="profile.html"><svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.1901 13.0916C11.6353 13.0916 16.2148 13.4784 16.2148 16.8252C16.2148 20.3537 10.8775 20.5654 8.58889 20.5781L8.1901 20.5789C7.75244 20.5789 7.39724 20.2259 7.39724 19.7886C7.39724 19.3523 7.75244 18.9982 8.1901 18.9982C11.1279 18.9982 14.6291 18.622 14.6291 16.8252C14.6291 15.3973 12.463 14.6723 8.1901 14.6723C5.25231 14.6723 1.75001 15.0485 1.75001 16.8463C1.75001 17.2489 1.86841 17.7684 2.79024 18.2194C3.16446 18.4028 3.637 18.5556 4.19412 18.6736C4.62226 18.7643 4.89605 19.1837 4.80408 19.6115C4.71317 20.0383 4.29243 20.3134 3.86429 20.2196C3.18032 20.0741 2.58409 19.8792 2.09253 19.64C0.499419 18.8602 0.164307 17.6894 0.164307 16.8463C0.164307 13.0916 6.20479 13.0916 8.1901 13.0916ZM8.19031 0.491943C11.1831 0.491943 13.6177 2.91992 13.6177 5.90325C13.6177 8.88659 11.1831 11.3146 8.19031 11.3146C6.96403 11.3146 5.80858 10.9215 4.85081 10.1775C4.50513 9.90878 4.44275 9.41244 4.71232 9.06784C4.98189 8.7243 5.47875 8.66213 5.82443 8.92979C6.50206 9.45564 7.32028 9.73385 8.19031 9.73385C10.3088 9.73385 12.0319 8.01509 12.0319 5.90325C12.0319 3.79142 10.3088 2.07266 8.19031 2.07266C6.07075 2.07266 4.34761 3.79142 4.34761 5.90325C4.34761 6.33953 3.99241 6.69361 3.55476 6.69361C3.1171 6.69361 2.76191 6.33953 2.76191 5.90325C2.76191 2.91992 5.19649 0.491943 8.19031 0.491943Z" fill="white" />
                                        </svg>
                                            Profile</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="ds-rightbar">
                        <div className="ds-head">
                            <h1>Hello Harmeet!</h1>
                            <div className="btn-box">
                                <a href="/">Free Plan</a>
                                <a href="/" className="upg-btn">Upgrade</a>
                            </div>
                        </div>
                        <div className="ds-midd-section">
                            <div className="col-lg-6 col-md-12 recommend">
                                <div className="midd-top">
                                    <h2>Recommended for you</h2>
                                </div>
                                <div className="recommended-blog">
                                    <div className="recom-box-main">
                                        <div className="recom-cont">
                                            <div className="recom-img"><img alt="" src={recommended1} /></div>
                                            <div className="recom-text">
                                                <h5>Chapter name will be here</h5>
                                                <p>Topic name here</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recom-box-main">
                                        <div className="recom-cont">
                                            <div className="recom-img"><img alt="" src={recommended2} /></div>
                                            <div className="recom-text">
                                                <h5>Chapter name will be here</h5>
                                                <p>Topic name here</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 weekly">
                                <div className="midd-top">
                                    <h2>Weekly Activities</h2>
                                    <select>
                                        <option>Last Week</option>
                                        <option>This Week</option>
                                    </select>
                                </div>
                                <div className="Weekly-blog">
                                    <div className="Weekly-box">
                                        <a href="chapters-list.html">
                                            <img alt="" src={wa1} />
                                            <strong>7</strong>
                                            <p>Classes</p>
                                        </a>
                                    </div>
                                    <div className="Weekly-box">
                                        <a href="/">
                                            <img alt="" src={wa2} />
                                            <strong>4</strong>
                                            <p>Entries</p>
                                        </a>
                                    </div>
                                    <div className="Weekly-box">
                                        <a href="/">
                                            <img alt="" src={wa3} />
                                            <strong>-2<sub>lbs</sub></strong>
                                            <p>Weight</p>
                                        </a>
                                    </div>
                                    <div className="Weekly-box">
                                        <a href="/">
                                            <img alt="" src={wa4} />
                                            <strong>18</strong>
                                            <p>Goals</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ds-bottom-section">
                            <div className="tab-head wd-sl-dashtabs">
                                <ul className="nav nav-tabs">
                                    <li><a data-toggle="tab" href="#all">All</a></li>
                                    <li><a data-toggle="tab" href="#favourites">Favourites</a></li>
                                    <li><a className="active" data-toggle="tab" href="#nutritions">Nutritions</a></li>
                                    <li><a data-toggle="tab" href="#exercise">Exercise</a></li>
                                </ul>
                                <div className="search-box">
                                    <input type="text" name="" placeholder="Search" />
                                    <button><i className="fas fa-search"></i></button>
                                </div>
                            </div>
                            <div className="tab-content wd-sl-dashtabs">
                                <div id="all" className="tab-pane fade">
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation1} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation2} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation3} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation4} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation5} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation1} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation2} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation3} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation4} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation5} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                </div>
                                <div id="favourites" className="tab-pane fade">
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation1} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation2} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation3} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation4} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation5} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation1} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation2} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation3} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation4} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation5} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                </div>
                                <div id="nutritions" className="tab-pane fade show in active">
                                    <div className="tab-cont-box">
                                        <span className="ribbon3">New</span>
                                        <span className="meditation-img"><img alt="" src={meditation1} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation2} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation3} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation4} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation5} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation1} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation2} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation3} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation4} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation5} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                </div>
                                <div id="exercise" className="tab-pane fade">
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation1} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation2} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation3} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation4} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation5} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation1} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation2} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation3} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation4} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                    <div className="tab-cont-box">
                                        <span className="meditation-img"><img alt="" src={meditation5} /></span>
                                        <h6>7 Days of Calming Anxiety</h6>
                                        <p>Meditation</p>
                                        <a href="/" className="wd-medi-lock"><img alt="" src={meditation_lock} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );
}
export default Dashboard;