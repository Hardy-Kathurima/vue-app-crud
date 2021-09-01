const Welcome = () =>
    import(
        "./Welcome.vue"
    );
const List = () =>
    import(
        "./components/List.vue"
    );
const Add = () =>
    import(
        "./components/Add.vue"
    );
const Edit = () =>
    import(
        "./components/Edit.vue"
    );




export const routes = [
    {
        name: "home",
        path: "/",
        component: Welcome,
    },
    {
        name: "hotelList",
        path: "/hotel",
        component: List,
    },
    {
        name: 'addHotel',
        path: "/hotel/add",
        component: Add,
    },
    {
        name: "editHotel",
        path: "/hotel/:id/edit",
        component: Edit,
    }




];
