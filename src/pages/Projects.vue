<template>
    <div>
         <section class="hero is-dark is-medium dark-blue">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title"></h1>
                    <h2 class="subtitle">Bots bots and more bots</h2>
                    <h3>#HEILTILER</h3>
                </div>
            </div>
            <HeroFoot></HeroFoot>
        </section>
        <section class="hero">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title is-2"><strong>My GitHub Projects</h1>
                </div>
            </div>
        </section>
        <section class="hero has-text-centered">
            <div id='spin' class="container">
               <div style="margin: auto;" class="spinner"></div>
               <br>
            </div>
            <div style="display:none;" id="projectcontainer" class="container has-text-centered">
                <table class="table is-fullwidth">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Language</th>
                            <th class="is-hidden-touch">Forks</th>
                            <th class="is-hidden-touch">Forked</th>
                        </tr>
                    </thead>
                    <tbody id="projectstable">
                    </tbody>
                </table>
            </div>
        </section>
        <script src="/static/js/projects.js"></script>
    </div>
</template>
<script>
export default {name: 'Projects'}
</script>
