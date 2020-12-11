import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "./styles.css";

function Dashboard() {

    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [isDeviceMenusHidden, setIsDeviceMenusHidden] = useState(true);

    function handleToggleSidebar() {

        setToggleSidebar(!toggleSidebar);

    }

    function handleToggleDeviceMenus() {

        setIsDeviceMenusHidden(!isDeviceMenusHidden);

    }

    return (

        <div id="dashboard-page">

            <div className="sidebar">

                <button type="button" id="toggle-sidebar" onClick={handleToggleSidebar}>
                    &gt;
                </button>

                <h1>Menu</h1>
                <div className="menu-option">
                    <button type="button" onClick={handleToggleDeviceMenus}>
                        <AiOutlinePlus color="#000" size={18} />
                    Dispositivos
                </button>
                    <div className={isDeviceMenusHidden ? "active" : ""}>
                        <a href="#">Medições</a>
                        <a href="#">Relatório</a>
                        <a href="#">Monitoramento</a>
                    </div>
                </div>


            </div>

            <div className="dashboard-page-content">

                <h1>Dashboard</h1>

                <button>Filtros</button>
                <div className="filter-container">

                    <div className="measurement-unit-wrapper">
                        <div>
                            <input id="voltage" name="measurementUnit" type="radio" value="Voltage" />
                            <label htmlFor="voltage">Tensão</label>
                        </div>

                        <div>
                            <input id="current" name="measurementUnit" type="radio" value="Current" />
                            <label htmlFor="current">Corrente</label>
                        </div>

                        <div>
                            <input id="frequency" name="measurementUnit" type="radio" value="Frequency" />
                            <label htmlFor="frequency">Frequência</label>
                        </div>

                        <div>
                            <input id="power" name="measurementUnit" type="radio" value="Power" />
                            <label htmlFor="power">Potência</label>
                        </div>
                    </div>

                    <div className="device-name-wrapper">
                        <label htmlFor="search-device">Nome do dispositivo</label>
                        <input id="search-device" type="text" placeholder="Ex: Pac 3200" />
                    </div>

                </div>

            </div>

        </div>

    )

}

export default Dashboard;