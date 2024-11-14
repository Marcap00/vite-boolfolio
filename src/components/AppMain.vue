<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
            urlApi: 'http://127.0.0.1:8000/api/projects'
        }
    },
    methods: {
        getDataProjects() {
            axios.get(this.urlApi)
                .then((response) => {
                    console.log('=======Inizio chiamata Api=======');
                    console.log(response.data.results);
                    this.projects = response.data.results;
                    console.log('Dati dei progetti memorizzati in projects:', this.projects);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    console.log('========Chiamata Api effettuata======');
                });
        }
    },
    created() {
        this.getDataProjects()
    }
};
</script>

<template>

    <main>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card text-center p-3">
                        <div class="card-img-top">
                            <!-- @if ($project->image)
                            <img src="{{ asset('/storage/' . $project->image) }}" alt="{{ $project->name }}">
                        @else  -->
                            <img class=" rounded-3 img-fluid" src="https://placehold.co/400x300?text=Project"
                                alt="Project's name">
                            <!-- @endif -->
                        </div>
                        <div class="card-body flex justify-content-center">
                            <p class="card-text">Category: <span class="fw-semibold"></span></p>
                            <p class="card-text">
                                <!--  @forelse  ($project->technologies as $technology)
                            <span class="badge text-black" style="background-color: {{ $technology->color }}">
                                #{{ $technology->name }}
                            </span>
                            @empty
                                No Technologies
                            @endforelse -->
                            </p>
                            <h3 class="card-title mb-3"> </h3>
                            <h6 class="card-subtitle mb-2 text-body-secondary"> </h6>
                            <p class="card-text"> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>


</template>

<style lang="scss"></style>