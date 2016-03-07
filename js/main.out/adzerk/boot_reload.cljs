(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] tutorial-cljs.core))
(client/connect "ws://localhost:57409" {:asset-host nil, :on-jsload (fn* [] (tutorial-cljs.core/main))})