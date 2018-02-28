<template>
    <nav class="navbar has-shadow">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <img src="/static/img/webicon.png" style="border-radius: 60%; display: block; height: auto; width: auto;">
                <strong>&nbsp; Arturo Guerra</strong>
            </router-link>
            <div class="navbar-burger burger" data-target="navbar-items">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>

        <div class="is-hidden-touch navbar-menu">
            <div class="navbar-end">
                 <router-link to="/" class="navbar-item is-tab" exact>
                    <span>Home</span>
                </router-link>
                <router-link to="/social" class="navbar-item is-tab" exact>
                     <span>Social</span>
                </router-link>
                <router-link to="/projects" class="navbar-item is-tab" exact>
                    <span>Projects</span>
                 </router-link>
             </div>
        </div>
        <div class="is-hidden-desktop navbar-menu" id="navbar-items">
            <div class="navbar-end">
                <router-link to="/" class="navbar-item" exact>
                    <span>Home</span>
                </router-link>
                <router-link to="/social" class="navbar-item" exact>
                    <span>Social</span>
                </router-link>
                <router-link to="/projects" class="navbar-item" exact>
                    <span>Projects</span>
                </router-link>
            </div>
        </div>
        <script src="static/js/burger.js"></script>
    </nav>
</template>
<script>
export default {name: 'NavMenu'}
</script>
