<script>
  export let props;
</script>

<div class="card card-side glass shadow-xl w-[32rem]">
  <figure>
    <img class="h-64" src={props.EventPoster} alt={props.EventShortName} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{props.EventName}</h2>
    <p>{props.EventDescription}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">{props.EventCoordinators}</button>
    </div>
  </div>
</div>
